
import Hero from "../components/Hero";
import FormContact from "../components/FormContact";
export default function Contact() {
  return (
    <div className="contact">
      <Hero
        image={
          "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title={"Contact Us"}
      />
      <FormContact />
    </div>
  );
}
