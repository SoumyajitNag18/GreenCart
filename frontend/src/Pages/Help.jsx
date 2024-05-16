import React from "react";
import './CSS/Help.css'
const Help = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const submitQuery = async () => {
    if (email === "" || message === "") return;
    await fetch("http://localhost:4000/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, message: message }),
    })
      .then((response) => {
        console.log("response -> ", response);
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error -> ", error);
        setEmail("");
        setMessage("");
      });
    setEmail("");
    setMessage("");
  };
  return (
    <div className="help">
      <div>
        <h1 className="h1">FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
        <p className="question">How can I tell if a product is cruelty-free?</p>
<p className="answer">Look for certifications like Leaping Bunny or PETA's cruelty-free logo, or check if the product is listed on cruelty-free databases.</p>

<p className="question">What does "biodegradable" mean, and how long does it take for a product to biodegrade?</p>
<p className="answer">Biodegradable means the product can break down naturally over time. The rate of biodegradation depends on various factors such as material type and environmental conditions.</p>

<p className="question">Are there any eco-friendly alternatives to single-use plastics?</p>
<p className="answer">Yes, consider options like reusable water bottles, stainless steel straws, or beeswax wraps as alternatives to single-use plastics.</p>

<p className="question">How can I find clothing made from sustainable fabrics?</p>
<p className="answer">Look for fabrics like organic cotton, hemp, bamboo, or TENCEL™ lyocell, and check product labels or descriptions for sustainability certifications.</p>

<p className="question">What are some eco-friendly cleaning products?</p>
<p className="answer">Look for cleaning products labeled as "green," "eco-friendly," or "non-toxic," or consider making your own cleaning solutions using natural ingredients like vinegar and baking soda.</p>

<p className="question">Can I find sustainable options for electronic devices?</p>
<p className="answer">Yes, look for electronics that are Energy Star certified, made from recycled materials, or have modular designs for easier repair and recycling.</p>

<p className="question">How can I reduce water usage with sustainable products?</p>
<p className="answer">Consider water-saving products like low-flow faucets, showerheads, and dual-flush toilets to reduce water consumption in your home.</p>

<p className="question">Are there sustainable options for pet products?</p>
<p className="answer">Yes, look for pet products made from natural and biodegradable materials, and consider eco-friendly pet food brands that prioritize sustainable sourcing and packaging.</p>

<p className="question">What are some sustainable options for home furnishings?</p>
<p className="answer">Look for furniture made from reclaimed wood, bamboo, or FSC-certified wood, and consider second-hand or vintage pieces to reduce waste.</p>

<p className="question">How can I ensure that a product is truly sustainable and not just greenwashing?</p>
<p className="answer">Research the company's sustainability initiatives, certifications, and transparency in their supply chain to verify their commitment to sustainability.</p>
</div>

      <div className="query">
        <label htmlFor="email">Enter Your Email Here: </label>
        <input
          type={"email"}
          style={{ borderRadius: "5px", height: "50px", padding: "1rem" }}
          placeholder={"ABCD@gmail.com"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
        <label htmlFor="message">Enter Your Message Here: </label>
        <textarea
          rows={5}
          placeholder={"If you have anything to say tell us."}
          onChange={(event) => {
            setMessage(event.target.value);
          }}/>
        <button
          style={{ borderRadius: "5px", height: "50px", padding: "1rem" }}
          onClick={() => {
            submitQuery();
          }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Help;
