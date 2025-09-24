import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useIntersectionObserver(
  targetRef,
  options = { threshold: 0.3 }
) {
  const isVisible = ref(false);

  let observer;

  onMounted(async () => {
    await nextTick();

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    }, options);

    if (targetRef.value) observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    if (observer && targetRef.value) observer.unobserve(targetRef.value);
  });

  return { isVisible };
}

export function useMultiObserver(options = { threshold: 0.3 }) {
  const visibleItems = ref({});
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.dataset.id;

        console.log(id, entry.isIntersecting);

        visibleItems.value[id] = entry.isIntersecting;
      });
    }, options);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  const observe = (el, id) => {
    if (observer && el) {
      el.dataset.id = id;
      observer.observe(el);
    }
  };

  return { visibleItems, observe };
}
