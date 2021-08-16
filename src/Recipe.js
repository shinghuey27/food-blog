import styles from "./recipe.module.scss";
import "./App.scss";
const Recipe = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.recipeTitle}>Classic Cheesecake Recipe</h1>

        <div className={styles.recipeDescOverview}>
          <p className={styles.recipeDesc}>
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>

        <img className={styles.photo1} src="./photo1.png" alt="photo1" />
      </div>

      <section className={styles.section1}>
        <div className={styles.moreInfo}>
          <div className={styles.infoYields}>
            <i className="fas fa-utensils-alt fa-2x"></i>
            <div>
              <p className={styles.infoTitle}>YIELDS</p>
              <p className={styles.infoDesc1}>12 servings</p>
            </div>
          </div>
          <div className={styles.info}>
            <i className="far fa-clock fa-2x"></i>{" "}
            <div>
              <p className={styles.infoTitle}>Prep time</p>
              <p className={styles.infoDesc}>45 minutes</p>
            </div>
          </div>
          <div className={styles.info}>
            <i className="far fa-clock fa-2x"></i>{" "}
            <div>
              <p className={styles.infoTitle}>cook time</p>
              <p className={styles.infoDesc}>1 hour</p>
            </div>
          </div>
          <div className={styles.info}>
            <i className="far fa-clock fa-2x"></i>{" "}
            <div>
              <p className={styles.infoTitle}>total time</p>
              <p className={styles.infoDesc}>7,75 hours</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.titleIngred}>Ingredients</h1>
          <div className={styles.info1}>
            <h3 className={styles.part1Ingred}>Graham Cracker Crust</h3>
            <div className={styles.checkboxOverview}>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="1" className={styles.checkbox} />
                <label for="1" className={styles.checkboxDesc}>
                  1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10
                  full sheet graham crackers)
                </label>
              </div>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="2" className={styles.checkbox} />
                <label for="2" className={styles.checkboxDesc}>
                  5 Tablespoons (70g) <b>unsalted butter</b>, melted
                </label>
              </div>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="3" className={styles.checkbox} />
                <label for="3" className={styles.checkboxDesc}>
                  1/4 cup (50g) <b>granulated sugar</b>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.info2}>
            <h3 className={styles.part1Ingred}>Cheesecake</h3>
            <div className={styles.checkboxOverview}>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="4" className={styles.checkbox} />
                <label for="4" className={styles.checkboxDesc}>
                  four 8-ounce blocks (904g) full-fat <b>cream cheese</b>,
                  softened to room temperature
                </label>
              </div>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="5" className={styles.checkbox} />
                <label for="5" className={styles.checkboxDesc}>
                  1 cup (200g) <b>granulated sugar</b>
                </label>
              </div>
              <div className={styles.checkboxItem}>
                <input type="checkbox" id="6" className={styles.checkbox} />
                <label for="6" className={styles.checkboxDesc}>
                  1 cup (240g) full-fat <b>sour cream</b>, at room temperature
                </label>
              </div>

              <div className={styles.checkboxItem}>
                <input type="checkbox" id="7" className={styles.checkbox} />
                <label for="7" className={styles.checkboxDesc}>
                  1 teaspoon <b>pure vanilla extract</b>
                </label>
              </div>

              <div className={styles.checkboxItem}>
                <input type="checkbox" id="8" className={styles.checkbox} />
                <label for="8" className={styles.checkboxDesc}>
                  2 teaspoons <b>fresh lemon juice</b> (optional, but
                  recommended)
                </label>
              </div>

              <div className={styles.checkboxItem}>
                <input type="checkbox" id="9" className={styles.checkbox} />
                <label for="9" className={styles.checkboxDesc}>
                  3 large <b>eggs</b>, at room temperature
                </label>
              </div>

              <div className={styles.checkboxItem}>
                <input type="checkbox" id="10" className={styles.checkbox} />
                <label for="10" className={styles.checkboxDesc}>
                  topping suggestions:{" "}
                  <i>
                    salted caramel, lemon curd, strawberry topping, chocolate
                    ganache, red wine chocolate ganache, fresh fruit, whipped
                    cream, or raspberry sauce
                  </i>
                  (recipe in notes)
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <h1 className={styles.titleIngred}>Instructions</h1>

        <div className={styles.checkboxItem}>
          <div className={styles.number}>1</div>
          <label className={styles.instructionsDesc}>
            Adjust the oven rack to the lower-middle position and preheat oven
            to 350°F (177°C).
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>2</div>
          <label className={styles.instructionsDesc}>
            <b>Make the crust: </b>Using a food processor, pulse the graham
            crackers into crumbs. Pour into a medium bowl and stir in sugar and
            melted butter until combined. (You can also pulse it all together in
            the food processor.) Mixture will be sandy. Press firmly into the
            bottom and slightly up the sides of a 9-inch or 10-inch springform
            pan. No need to grease the pan first. I use the bottom of a
            measuring cup to pack the crust down tightly. Pre-bake for 8
            minutes. Remove from the oven and place the hot pan on a large piece
            of aluminum foil. The foil will wrap around the pan for the water
            bath in step 4. Allow crust to slightly cool as you prepare the
            filling.
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>3</div>
          <label className={styles.instructionsDesc}>
            <b>Make the filling: </b>Using a handheld or stand mixer fitted with
            a paddle attachment, beat the cream cheese and granulated sugar
            together on medium-high speed in a large bowl until the mixture is
            smooth and creamy, about 2 minutes. Add the sour cream, vanilla
            extract, and lemon juice then beat until fully combined. On medium
            speed, add the eggs one at a time, beating after each addition until
            just blended. After the final egg is incorporated into the batter,
            stop mixing. To help prevent the cheesecake from deflating and
            cracking as it cools, avoid over-mixing the batter as best you can.
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>4</div>
          <label className={styles.instructionsDesc}>
            <b>Prepare the simple water bath (see note) </b>
            Boil a pot of water. You need 1 inch of water in your roasting pan
            for the water bath, so make sure you boil enough. I use an entire
            kettle of hot water. As the water is heating up, wrap the aluminum
            foil around the springform pan. Pour the cheesecake batter on top of
            the crust. Use a rubber spatula or spoon to smooth it into an even
            layer. Place the pan inside of a large roasting pan. Carefully pour
            the hot water inside of the pan and place in the oven. (Or you can
            place the roasting pan in the oven first, then pour the hot water
            in. Whichever is easier for you.)
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>5</div>
          <label className={styles.instructionsDesc}>
            Bake cheesecake for 55-70 minutes or until the center is almost set.
            When it’s done, the center of the cheesecake will slightly wobble if
            you gently shake the pan. Turn the oven off and open the oven door
            slightly. Let the cheesecake sit in the oven in the water bath as it
            cools down for 1 hour. Remove from the oven and water bath, then
            cool cheesecake completely at room temperature. Then refrigerate the
            cheesecake for at least 4 hours or overnight.
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>6</div>
          <label className={styles.instructionsDesc}>
            Use a knife to loosen the chilled cheesecake from the rim of the
            springform pan, then remove the rim. Using a clean sharp knife, cut
            into slices for serving. For neat slices, wipe the knife clean and
            dip into warm water between each slice.
          </label>
        </div>
        <div className={styles.checkboxItem}>
          <div className={styles.number}>7</div>
          <label className={styles.instructionsDesc}>
            Serve cheesecake with desired toppings. Cover and store leftover
            cheesecake in the refrigerator for up to 5 days.
          </label>
        </div>
      </section>
      <section>
        <div className={styles.source}>
          Source:  <br />https://sallysbakingaddiction.com/classic-cheesecake/
        </div>
      </section>

      
      <footer className={styles.footer}>
        created by <b className={styles.username}>shinghuey27</b> -
        devChallenges.io
      </footer>
    </main>
  );
};

export default Recipe;
