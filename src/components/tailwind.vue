<template>
  <div id="app">
    <!--Sidebar with Dimmer -->
    <div class="fixed flex z-30">
      <!-- Sidebar -->
      <div
        class="absolute flex top-0 h-screen z-20"
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->
        <button
          @click.prevent="toggle()"
          class="
            w-10
            h-10
            p-1
            my-0
            rounded
            text-white
            bg-gray-600
            text-center
            focus:outline-none
            hover:bg-gray-500
            transition-color
            duration-300
          "
        >
          <span
            class="block transform origin-center font-bold"
          ><i class="fas fa-bars"></i>
          </span>
        </button>

        <!-- Sidebar Content -->
        <div
          ref="content"
          class="
            transition-all
            duration-700
            bg-gray-700
            overflow-hidden
            flex
            items-center
            justify-center
          "
          :class="[open ? 'max-w-lg' : 'max-w-0']"
        >
          <div class="w-48 text-center font-bold text-xl">
              <h4 class="pb-4 text-white">Today</h4>
              <h4 class="text-white">Tommorow</h4>
          </div>
          <slot></slot>
        </div>
      </div>

      <transition name="fade">
        <!-- Dimmer -->
        <div
          v-if="dimmer && open"
          @click="toggle()"
          class="flex-1 bg-gray-400 bg-opacity-100 active:outline-none z-10"
        />
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  name: "tailwind",
  data() {
    return {
      open: true,
      dimmer: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
</style>