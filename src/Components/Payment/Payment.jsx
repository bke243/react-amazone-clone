import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";
import { db } from "../../firebase";
function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const basketSubTotal = basket
    .map((product) => product.price)
    .reduce((initialPrice, accPrice) => initialPrice + accPrice, 0);

  const stripe = useStripe();
  const elemtns = useElements();

  const [succeeded, setSucceeded] = useState(null);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [cleintSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the key that allow users to get the secret key for charing the price
    const getClientSecret = async () => {
      // generate the clientSecret
      const response = axios.post(
        `/payments/create?total=${basketSubTotal * 100}`
      );
      setClientSecret((await response).data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The secret is ", cleintSecret);

  const handleSubmit = async (event) => {
    // handle payrment
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(cleintSecret, {
        payment_method: {
          card: elemtns.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // succes payment = payementIntent

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(false);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });

    // const payload = await stripe
  };

  const handleChange = (event) => {
    // handle error while the user is typing
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} item</Link>)
        </h1>

        {/* delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery addrerss</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Line</p>
            <p>Poland </p>
          </div>
        </div>

        {/* review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return <CheckoutProduct {...item} />;
            })}
          </div>
        </div>

        {/* payement method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payement method</h3>
          </div>
          <div className="payment__details">
            {/* magic oh the react stripe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payement__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={basketSubTotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* show the div with the eeror */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
