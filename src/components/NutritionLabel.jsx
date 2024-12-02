export default function NutritionLabel() {
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
          <p>Weight</p>
        </div>
        <span>105kg</span>
      </div>
      <div class="divider medium"></div>
      <div class="daily-value small-text">
        <p class="bold right no-divider">231 lbs *</p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Age</span>
          </span>{" "}
          <span class="bold">28 years</span>
        </p>
        <p class="indent no-divider">
          Active in gym <span class="bold">3 years</span>
        </p>
        <div class="divider"></div>
        <p class="indent no-divider">
            Squat <span class="bold">140kg/308lbs</span>
        </p>
        <div class="divider"></div>
        <p class="indent no-divider">
          Bench<span class="bold">110kg/242lbs</span>
        </p>
        <div class="divider"></div>
        <p class="indent no-divider">
          Deadlift<span class="bold">200kg/440lbs</span>
        </p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Carbohydrate</span> 37g
          </span>{" "}
          <span class="bold">13%</span>
        </p>
        <p class="indent no-divider">Dietary Fiber 4g</p>
        <div class="divider"></div>
        <p class="indent no-divider">Total Sugars 12g</p>
        <div class="divider double-indent"></div>
        <p class="double-indent no-divider">
          Includes 10g Added Sugars <span class="bold">20%</span>
        </p>
        <div class="divider"></div>
        <p class="no-divider">
          <span>
            <span class="bold">Protein</span> 3g
          </span>
        </p>
        <div class="divider large"></div>
        <p>
          Vitamin D 2mcg <span>10%</span>
        </p>
        <p>
          Calcium 260mg <span>20%</span>
        </p>
        <p>
          Iron 8mg <span>45%</span>
        </p>
        <p class="no-divider">
          Potassium 235mg <span>6%</span>
        </p>
      </div>
      <div class="divider medium"></div>
      <p class="note">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of
        food contributes to a daily diet. 2,000 calories a day is used for
        general nutrition advice.
      </p>
    </div>
  );
}
