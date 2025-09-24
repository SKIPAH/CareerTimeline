import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function NutritionLabel() {
  const kilogramToLbs = 2.20462;

  const [personalBestLifts, setPersonalBestLifts] = useState({
    squat: 150,
    bench: 120,
    deadlift: 225,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/lifts")
      .then((response) => setPersonalBestLifts(response.data))
      .catch((error) => console.error("Error fetching lifts", error));
  }, []);

  return (
    <div className="label">
      <header>
        <h1 className="bold">Fitness Facts</h1>
        <div className="divider"></div>
        <p>8 servings per container</p>
        <p className="bold">
          Serving size <span>2/3 cup (55g)</span>
        </p>
      </header>
      <div className="divider large"></div>
      <div className="calories-info">
        <div className="left-container">
          <h2 className="bold small-text">Amount per serving</h2>
          <p>Bodyweight Currently</p>
        </div>
        <span>96kg</span>
      </div>
      <div className="divider medium"></div>
      <div className="daily-value small-text">
        <p className="bold right no-divider">231 lbs</p>
        <div className="divider"></div>
        <p>
          <span>
            <span className="bold">Total Age</span>
          </span>{" "}
          <span className="bold">29 years</span>
        </p>

        <p className="indent no-divider">
          Squat{" "}
          <span className="bold">
            {personalBestLifts.squat}kg/
            {Math.round(personalBestLifts.squat * kilogramToLbs)}lbs
          </span>
        </p>
        <div className="divider"></div>
        <p className="indent no-divider">
          Bench
          <span className="bold">
            {personalBestLifts.bench}kg/
            {Math.round(personalBestLifts.bench * kilogramToLbs)}lbs
          </span>
        </p>
        <div className="divider"></div>
        <p className="indent no-divider">
          Deadlift
          <span className="bold">
            {personalBestLifts.deadlift}kg/
            {Math.round(personalBestLifts.deadlift * kilogramToLbs)}lbs
          </span>
        </p>
        <div className="divider"></div>
        <p>
          <span>
            <span className="bold">Total Years in Gym</span>
          </span>{" "}
          <span className="bold">2</span>
        </p>
        <p>
          <span>
            <span className="bold">Previous sports experience</span>
          </span>{" "}
        </p>
        <p className="indent no-divider">Track And Field</p>
        <div className="divider double-indent"></div>
        <p className="double-indent no-divider">
          Wrestling <span className="bold"></span>
        </p>
        <div className="no-divider"></div>

        <div className="divider large"></div>
        <p>
          Lean muscle mass <span>1%*</span>
        </p>
        <p>
          Fat <span>99%*</span>
        </p>
        <p>
          BMI <span>Too high*</span>
        </p>
        <p className="no-divider">
          Mindset <span>FULL*</span>
        </p>
      </div>
      <div className="divider medium"></div>
      <p className="note">* Not actual values.</p>
    </div>
  );
}
