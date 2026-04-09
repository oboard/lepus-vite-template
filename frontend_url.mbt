///|
pub async fn frontend_url() -> String {
  @async.sleep(0)
  match @env.get_env_var("LEPUS_DEV_URL") {
    Some(url) => url
    None =>
      abort(
        "Missing embedded frontend assets. Use `lepus build` to build a runnable binary.",
      )
  }
}
