import React, { useEffect, useState } from "react";
import "./Pay.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const key =
    "pk_test_51L0lILJNGKoLywBjp8ooTKXefeJR3jAchauqV3hNucQqldxxJgMMgMSPA6oQuRnyZ5Fl0l2TNHQ3ACzSHmbJS3yy00KApTWBSR";
  const onToken = async (token) => {
    if (token) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: token?.id,
            amount: 2000,
          }
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="pay">
      <StripeCheckout
        stripeKey={key}
        name="test"
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        shippingAddress
        billingAddress
        description="your total is $20"
        amount={2000}
        currency="USD"
        token={onToken}
      >
        <button>pay</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
