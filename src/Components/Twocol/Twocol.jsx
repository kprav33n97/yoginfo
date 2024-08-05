import "./Twocol.css";

const Twocol = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end">
          <div className="md:basis-1/2">
            <div className="yoginfo-s2-img leading-[0px]">
              <img
                src="https://demo.wp-eventmanager.com/wpem-online-education/wp-content/themes/wpem-online-education/assets/images/img-1.png"
                alt="Yoga Image"
              />{" "}
            </div>
          </div>
          <div className="md:basis-1/2">
            <div className="s2-data pb-20 pl-8">
              <h3 className="s2-data-heading text-4xl font-bold">
                Goal Setting!
              </h3>

              <p className="mt-4 s2-data-para">
                If you want to get at your hidden resources, stimulate your
                growth and your power, you must be continually improving
                yourself somewhere; increasing your intelligence by closer and
                keener observation, by the constant improving of your knowledge,
                the, broadening of your mental and spiritual outlook, the
                getting away from self, and the enlarging of your sphere of
                service and helpfulness. Stop fearing change. Be confident in
                your ability to meet challenges with new and imaginative ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twocol;
