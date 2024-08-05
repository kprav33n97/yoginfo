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

              <ul className="mb-8 s2-data-para">
                <li>
                  1. Goal setting - First step is setting a goal with crystal
                  clarity exactly what you want with exact measurement like 60kg
                  weight, 50k salary exact unit should be specified.
                </li>
                <li>
                  2. Identification of distraction -To kill the distraction
                  direction should be clear. Rules:
                  <ul>
                    <li>
                      ◉ Morning time for exercises. Squats, pushups, arms
                      strecher, anulom vilom, kapalbhati, marma massage.
                    </li>
                    <li>◉ Evening time for reading.</li>
                    <li>◉ Night time for learning new things on youtube.</li>
                  </ul>
                </li>
                <li>
                  3. Raise your standard - Consistency and Progression:
                  <p>
                    Gradually increasing the intensity, duration, or difficulty
                    of workouts helps prevent plateaus and promotes continual
                    improvement.
                  </p>
                </li>
              </ul>
              <a href="#" className="s2-btn">
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twocol;
