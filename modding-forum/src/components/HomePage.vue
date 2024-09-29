<template>
  <div class="home-page">
    <section class="main-section">
      <h1>Discover the Best Game Mods</h1>
      <p>Your one-stop destination for the latest and most popular mods for all your favorite games.</p>
      <button class="explore-btn">Explore Mods</button>
    </section>

    <section class="featured-mods">
      <h2>Featured Mods</h2>
      <div class="mods-grid">
        <FeaturedMods
          title="Fantasy Game Mod"
          description="Enhance your fantasy game experience with this popular mod that improves graphics and adds new features."
          imgSrc="/path/to/fantasy.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Racing Game Mod"
          description="Get new cars and tracks for your racing game with this exciting mod. Experience the thrill of the race with enhanced gameplay."
          imgSrc="/path/to/racing.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Strategy Game Mod"
          description="Add new units and maps to your strategy game with this comprehensive mod. Plan your strategy and dominate the battlefield."
          imgSrc="/path/to/strategy.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Space Exploration Mod"
          description="Explore new galaxies and planets in your space simulation game with this expansion mod."
          imgSrc="/path/to/space.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Horror Survival Mod"
          description="Enhance the atmosphere of your survival game with darker environments and scarier enemies."
          imgSrc="/path/to/horror.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Adventure Pack"
          description="Add new quests, characters, and adventures to your favorite RPG."
          imgSrc="/path/to/adventure.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Superhero Expansion"
          description="Add new superhero characters and powers to your game."
          imgSrc="/path/to/superhero.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Medieval Warfare"
          description="Introduce medieval weapons and tactics to your strategy game."
          imgSrc="/path/to/medieval.jpg"
        ></FeaturedMods>
        <FeaturedMods
          title="Fantasy Creatures"
          description="Expand your world with new fantasy creatures and enemies."
          imgSrc="/path/to/fantasycreatures.jpg"
        ></FeaturedMods>
      </div>
    </section>

    <section class="latest-discussions">
      <h2>Latest Discussions</h2>
      <div class="discussions-grid">
        <LatestDiscussions
          title="Discussion on Fantasy Game Mod"
          description="Join the conversation about the latest updates and features of the Fantasy Game Mod."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Strategy Game Mod Strategies"
          description="Discuss the best strategies for new units and maps in the Strategy Game Mod."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Tips and Tricks for Racing Game Mod"
          description="Discover tips and tricks to master the new cars and tracks in the Racing Game Mod."
        ></LatestDiscussions>
        <LatestDiscussions
          title="General Modding Tips"
          description="Get general tips and advice on how to create and install mods for your favorite games."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Space Exploration Mod Ideas"
          description="Discuss the best ways to explore new planets and galaxies in your space mod."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Survival Horror Tactics"
          description="Share your survival strategies and tips for the Horror Survival Mod."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Medieval Warfare Tactics"
          description="Discuss the best medieval strategies and tactics."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Superhero Powers Discussion"
          description="Debate on the best superhero powers and abilities."
        ></LatestDiscussions>
        <LatestDiscussions
          title="Fantasy Creature Encounters"
          description="Share your encounters with new fantasy creatures."
        ></LatestDiscussions>
      </div>
    </section>
  </div>
</template>

<script>
import FeaturedMods from './FeaturedMods.vue';
import LatestDiscussions from './LatestDiscussions.vue';

export default {
  name: 'HomePage',
  components: {
    FeaturedMods,
    LatestDiscussions,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/HomePage.scss";
</style>
