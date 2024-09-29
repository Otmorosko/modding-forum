<template>
  <div class="home-page">
    <section class="main-section">
      <h1>Discover the Best Game Mods</h1>
      <p>Your one-stop destination for the latest and most popular mods for all your favorite games.</p>
      <router-link to="/mods" class="explore-btn">Explore Mods</router-link>
    </section>

    <div class="separator"></div>

    <section class="featured-mods">
      <h2>Featured Mods</h2>
      <div class="mods-grid">
        <FeaturedMods
          title="Fantasy Game Mod"
          description="Enhance your fantasy game experience with this popular mod that improves graphics and adds new features."
          imgSrc="https://via.placeholder.com/150.png?text=Fantasy+Game"
          category="Fantasy RPG"
        />
        <FeaturedMods
          title="Racing Game Mod"
          description="Get new cars and tracks for your racing game with this exciting mod. Experience the thrill of the race with enhanced gameplay."
          imgSrc="https://via.placeholder.com/150.png?text=Racing+Game"
          category="Racing"
        />
        <FeaturedMods
          title="Strategy Game Mod"
          description="Add new units and maps to your strategy game with this comprehensive mod. Plan your strategy and dominate the battlefield."
          imgSrc="https://via.placeholder.com/150.png?text=Strategy+Game"
          category="Strategy"
        />
        <FeaturedMods
          title="Space Exploration Mod"
          description="Explore new galaxies and planets in your space simulation game with this expansion mod."
          imgSrc="https://via.placeholder.com/150.png?text=Space+Exploration"
          category="Space Simulation"
        />
        <FeaturedMods
          title="Horror Survival Mod"
          description="Enhance the atmosphere of your survival game with darker environments and scarier enemies."
          imgSrc="https://via.placeholder.com/150.png?text=Horror+Survival"
          category="Horror"
        />
        <FeaturedMods
          title="Adventure Pack"
          description="Add new quests, characters, and adventures to your favorite RPG."
          imgSrc="https://via.placeholder.com/150.png?text=Adventure+Pack"
          category="Adventure RPG"
        />
        <FeaturedMods
          title="Superhero Expansion"
          description="Add new superhero characters and powers to your game."
          imgSrc="https://via.placeholder.com/150.png?text=Superhero+Expansion"
          category="Superhero"
        />
        <FeaturedMods
          title="Medieval Warfare"
          description="Introduce medieval weapons and tactics to your strategy game."
          imgSrc="https://via.placeholder.com/150.png?text=Medieval+Warfare"
          category="Medieval"
        />
        <FeaturedMods
          title="Fantasy Creatures"
          description="Expand your world with new fantasy creatures and enemies."
          imgSrc="https://via.placeholder.com/150.png?text=Fantasy+Creatures"
          category="Fantasy RPG"
        />
      </div>
    </section>

    <div class="separator"></div>

    <section class="latest-discussions">
      <h2>Latest Discussions</h2>
      <div class="discussions-grid">
        <LatestDiscussions
          title="Discussion on Fantasy Game Mod"
          description="Join the conversation about the latest updates and features of the Fantasy Game Mod."
        />
        <LatestDiscussions
          title="Strategy Game Mod Strategies"
          description="Discuss the best strategies for new units and maps in the Strategy Game Mod."
        />
        <LatestDiscussions
          title="Tips and Tricks for Racing Game Mod"
          description="Discover tips and tricks to master the new cars and tracks in the Racing Game Mod."
        />
        <LatestDiscussions
          title="General Modding Tips"
          description="Get general tips and advice on how to create and install mods for your favorite games."
        />
        <LatestDiscussions
          title="Space Exploration Mod Ideas"
          description="Discuss the best ways to explore new planets and galaxies in your space mod."
        />
        <LatestDiscussions
          title="Survival Horror Tactics"
          description="Share your survival strategies and tips for the Horror Survival Mod."
        />
        <LatestDiscussions
          title="Medieval Warfare Tactics"
          description="Discuss the best medieval strategies and tactics."
        />
        <LatestDiscussions
          title="Superhero Powers Discussion"
          description="Debate on the best superhero powers and abilities."
        />
        <LatestDiscussions
          title="Fantasy Creature Encounters"
          description="Share your encounters with new fantasy creatures."
        />
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
