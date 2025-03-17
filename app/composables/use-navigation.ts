import type { RouteLocationNamedI18n } from "vue-router";

export function useNavigation() {
  const { t } = useI18n();

  return computed(
    () =>
      [
        {
          title: t("navigation.services"),
          to: {
            path: "/",
            hash: "#services",
          },
        },
        {
          title: t("navigation.sellers"),
          to: {
            path: "/",
            hash: "#sellers",
          },
        },
        {
          title: t("navigation.buyers"),
          to: {
            path: "/",
            hash: "#buyers",
          },
        },
        {
          title: t("navigation.method"),
          to: {
            path: "/",
            hash: "#method",
          },
        },
        {
          title: t("navigation.coaching"),
          to: {
            path: "/",
            hash: "#coaching",
          },
        },
      ] satisfies {
        title: string;
        to: RouteLocationNamedI18n;
      }[]
  );
}

export function navigationHeight() {}
