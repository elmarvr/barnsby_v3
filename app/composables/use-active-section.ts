import { type MaybeComputedElementRef } from "@vueuse/core";

const activeSection = useState("active-section", () => shallowRef("home"));

export function useActiveSection() {
  return activeSection;
}

export function useSection(target: MaybeComputedElementRef) {
  // const route = useRoute();
  // const { isScrolling } = useWindowScroll();

  // watch(
  //   () => route.hash,
  //   () => {
  //     if (!route.hash) {
  //       return;
  //     }

  //     const section = route.hash.slice(1);

  //     if (section) {
  //       activeSection.value = section;
  //     }
  //   },
  //   {
  //     immediate: true,
  //   }
  // );

  useIntersectionObserver(
    target,
    ([entry]) => {
      // || (route.hash && !isScrolling.value)
      if (!entry) {
        return;
      }

      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;

        return;
      }
    },
    {
      threshold: 0.5,
      rootMargin: "0px 60px 0px 0px",
    }
  );
}
