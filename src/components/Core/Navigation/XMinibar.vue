<template>
  <va-minibar theme="darker">
    <div slot="top">
      <va-minibar-item
        v-for="m in modules"
        :key="m.type"
        :tooltip="
          currentMode == m.mode
            ? $t('side.modules.tip.current', { module: $t(m.title) })
            : $t(`side.modules.tip.select`, { module: $t(m.title) })
        "
        @click.native="onSwitchModule(m)"
      >
        <va-icon :type="m.icon" size="1.35em" />
      </va-minibar-item>
    </div>

    <div slot="bottom">
      <va-minibar-item :tooltip="''">
        <va-icon type="users" size="1.25em" />
      </va-minibar-item>
      <va-minibar-item :tooltip="''">
        <va-icon type="user-circle" size="1.25em" />
      </va-minibar-item>
    </div>
  </va-minibar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ModuleIcon, ModuleTypes } from "@/types/modules";

@Component
export default class XMinibar extends Vue {
  modules: Array<ModuleIcon> = [
    {
      title: "modules.public",
      type: ModuleTypes.PUBLIC,
      route: {
        regexp: /public/,
        default: "/public"
      },
      icon: "globe"
    }
  ];

  onSwitchModule(module: ModuleIcon) {
    this.$router.push(module.route.default);
  }

  get currentModule() {
    const current = this.modules.filter(m => {
      return m.route.regexp.test(this.$route.path);
    });

    if (current.length > 0) {
      return current[0].type;
    }

    return ModuleTypes.PUBLIC;
  }
}
</script>
