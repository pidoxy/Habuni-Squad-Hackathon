import React from 'react'

function SquadPay() {
 
    const squadInstance = new squad({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: () => console.log(`Linked successfully`),
      key: "test_pk_sample-public-key-1",
      //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
      currency_code: "NGN"
    });
    squadInstance.setup();
    squadInstance.open();
  
  }

const  PaymentModal = () => {
 
  return (
    <div>
        <form style="padding-left: 30px;" class="text-center">
      <div class="text-left" style="color:red; font-family: Verdana; font-size: 30px;">SAMPLE CHECKOUT</div>
      <h6>Note: Amount should be between $1 to $10,000 (USD), NGN100 to NGN5,000,000 and KSH100 to KSH5,000,000</h6>
      <div class="row text-center">
        <div class="col-lg-4">
            <label for="email">Email Address</label>
            <input type="email" id="email-address" class="form-control" required /><br/>
        </div>
        <div class="col-lg-4">
            <label for="amount">Amount</label>
            <input type="tel" id="amount" class="form-control" required /><br/>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" class="form-control" /><br/>
        </div>
        <div class="col-lg-4">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" class="form-control" /><br/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-submit">
          <button type="button" onclick={SquadPay()} class="btn btn-danger">Check Out</button><br/><br/>
        </div>
      </div>
  </form>
    </div>
  );
};

export default PaymentModal