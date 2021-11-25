import "../css/medicalService.css";

// images
import img30 from "../Images/30.jpg";
import img31 from "../Images/31.jpg";
import img33 from "../Images/33.jpg";
import img32 from "../Images/32.jpg";
import img34 from "../Images/34.png";
import img35 from "../Images/35.jfif";
import img36 from "../Images/36.jpg";
import img37 from "../Images/37.jpg";


import HomeServiceCard from "../props/HomeServiceCard";

export default function MedicalServices() {
  return (
    <div className="homeServices">
      <h1>Medical Testing Services</h1>
      <div className="cards">
        <HomeServiceCard
          img={img30}
          title="Fasting Blood Sugar Test"
          des="Fasting blood sugar test is done after you fasted (without eating anything) for a whole night or for 8 to 12 hours. Usually, the blood is drawn in
           the morning after overnight fasting."
          link=""
        />
       
          <HomeServiceCard
          img={img31}
          title="Liver Function Test"
          des="Since some foods and medicines may interfere with your test results, It Depends on your doctor may ask you to fast for 10 to 12 hours or to do after food prior to the test without taking food, drinks or medicines."
          link=""
        />
    
        <HomeServiceCard
          img={img32}
          title="Thyroid Profile Test "
          des="A thyroid profile test is also known as thyroid panel or thyroid function panel test. It is a group of tests that helps to evaluate the functioning of thyroid gland and to help diagnose the disorders of thyroid. These tests measure the levels of thyroid hormones such as T3, T4 and TSH in the blood."
           link=""
        />
         <HomeServiceCard
          img={img33}
          title="Complete Blood Count Test"
          des="A complete blood count, also known as a full blood count, is a set of medical laboratory tests that provide information about the cells in a person's blood. The CBC indicates the counts of white blood cells, red blood cells and platelets, the concentration of hemoglobin, and the hematocrit."
          link=""
        />
            <HomeServiceCard
          img={img37}
          title="Beta HCG Test"
          des="The best way to confirm a pregnancy is through a blood test, as it detects small amounts of the hCG hormone produced during pregnancy, with the result being positive when the hormone beta-hCG levels are greater than 5.0 mlU / ml."
             link=""
        />
          <HomeServiceCard
          img={img34}
          title="Lipid Profile Test "
          des="A lipid profile is a blood test that measures the amount of cholesterol and fats called triglycerides in the blood. These measurements give the doctor a quick snapshot of what's going on in your blood. Cholesterol and triglycerides in the blood can clog arteries, making you more likely to develop heart disease."
           link=""
        />
       
<HomeServiceCard
          img={img35}
          title="HbA1c Test"
          des=" A hemoglobin A1c (HbA1c) test measures the amount of blood sugar (glucose) attached to hemoglobin. Hemoglobin is the part of your red blood cells that carries oxygen from your lungs to the rest of your body"
           link=""
        />

        <HomeServiceCard
          img={img36}
          title="Vitamin B 12 Test"
          des="A vitamin B12 test measures the amount of vitamin B12 in the blood. The body needs this B vitamin to make blood cells and to maintain a healthy nervous system. Vitamin B12 is found in animal products such as meat, shellfish, milk, cheese, and eggs."
           link=""
        />
      </div>
    </div>
  );
}
