import Card from "./Card";

const Contact = () => {
  return (
    <div className="mt-16 w-2/3" id="Contact">
      <h1 className="text-center text-2xl md:text-3xl font-semibold">
        Contact The Leads
      </h1>
      <div className="p-4 grid gap-4 md:gap-12 lg:gap-4 md:grid-cols-3 items-center">
        <Card />
      </div>
    </div>
  );
};

export default Contact;
