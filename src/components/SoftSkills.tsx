// SoftSkills.tsx
import { softSkills } from "../data/softSkills";
import { SoftSkillQuote } from "./SoftSkillQuote";
import { TitleTag } from "./TitleTag";

const SoftSkills = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title="Soft Skills" />

      <div className="d-flex flex-column align-items-center">
        {softSkills.map((s) => {
          return (

            <div key={s.title} className="col-md-8 offset-md-2 col-lg-6 mx-auto mb-5">

              <SoftSkillQuote title={s.title} quote={s.quote} />

            </div>

          );
        })}
      </div>

    </div>
  </section>
);

export default SoftSkills;