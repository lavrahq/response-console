<template>
  <div id="app">
    <va-app
      :desktop-sidebar-width="desktopSidebarWidth"
      :desktop-minibar-width="desktopMinibarWidth"
      :desktop-topbar-height="desktopTopbarHeight"
      :mobile-sidebar-width="mobileSidebarWidth"
      :mobile-minibar-width="mobileMinibarWidth"
      :mobile-topbar-height="mobileTopbarHeight"
      :sidebar-priority="sidebarPriority"
      :minibar-priority="minibarPriority"
      :reverse="reverse"
      :split="split"
      :rtl="rtl"
    >
      <va-topbar :theme="theme" />

      <x-minibar />

      <va-sidebar theme="dark" />

      <va-page />
    </va-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import XMinibar from "@/components/Core/Navigation/XMinibar.vue";

@Component({
  components: {
    XMinibar
  }
})
export default class App extends Vue {
  /* desktop */
  desktopSidebarWidth: Number = 220;
  desktopMinibarWidth: Number = 55;
  desktopTopbarHeight: Number = 0;

  /* mobilr */
  mobileSidebarWidth: Number = 0;
  mobileMinibarWidth: Number = 0;
  mobileTopbarHeight: Number = 50;

  /* priorities */
  sidebarPriority: Boolean = false;
  minibarPriority: Boolean = false;

  /* additional options */
  rtl: Boolean = false;
  reverse: Boolean = false;
  split: Boolean = false;

  /* child-component defaults */
  theme: string = "darker";
}
</script>
