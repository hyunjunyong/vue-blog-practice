export default defineNuxtRouteMiddleware((to, from) => {
  // 차후 Supabase 다시 확인예정
  // const user = useSupabaseUser();
  // if (user.value || to.params.chapterSlug === '1-chapter-1') {
  //   return navigateTo(`/login?redirectTo=${to.path}`);
  // }
});
