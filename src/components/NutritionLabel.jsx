import axios from "axios";
import { useEffect, useState } from "react";

export default function NutritionLabel() {
  const kilogramToLbs = 2.20462;

  const [personalBestLifts, setPersonalBestLifts] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/lifts")
      .then((response) => setPersonalBestLifts(response.data))
      .catch((error) => console.error("Error fetching lifts", error));
  }, []);

  return (
    <div class="label">
      <header>
        <h1 class="bold">Fitness Facts</h1>
        <div class="divider"></div>
        <p>8 servings per container</p>
        <p class="bold">
          Serving size <span>2/3 cup (55g)</span>
        </p>
      </header>
      <div class="divider large"></div>
      <div class="calories-info">
        <div class="left-container">
          <h2 class="bold small-text">Amount per serving</h2>
          <p>Bodyweight</p>
        </div>
        <span>105kg</span>
      </div>
      <div class="divider medium"></div>
      <div class="daily-value small-text">
        <p class="bold right no-divider">231 lbs</p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Age</span>
          </span>{" "}
          <span class="bold">28 years</span>
        </p>

        <p class="indent no-divider">
          Squat{" "}
          <span class="bold">
            {personalBestLifts.squat}kg/
            {Math.round(personalBestLifts.squat * kilogramToLbs)}lbs
          </span>
        </p>
        <div class="divider"></div>
        <p class="indent no-divider">
          Bench
          <span class="bold">
            {personalBestLifts.bench}kg/
            {Math.round(personalBestLifts.bench * kilogramToLbs)}lbs
          </span>
        </p>
        <div class="divider"></div>
        <p class="indent no-divider">
          Deadlift
          <span class="bold">
            {personalBestLifts.deadlift}kg/
            {Math.round(personalBestLifts.deadlift * kilogramToLbs)}lbs
          </span>
        </p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Years in Gym</span>
          </span>{" "}
          <span class="bold">2</span>
        </p>
        <p>
          <span>
            <span class="bold">Previous sports experience</span>
          </span>{" "}
        </p>
        <p class="indent no-divider">Track And Field</p>
        <div class="divider double-indent"></div>
        <p class="double-indent no-divider">
          Wrestling <span class="bold"></span>
        </p>
        <div class="no-divider"></div>

        <div class="divider large"></div>
        <p>
          Lean muscle mass <span>1%*</span>
        </p>
        <p>
          Fat <span>99%*</span>
        </p>
        <p>
          BMI <span>Too high*</span>
        </p>
        <p class="no-divider">
          Mindset <span>FULL*</span>
        </p>
      </div>
      <div class="divider medium"></div>
      <p class="note">* Not actual values.</p>
    </div>
  );
}
