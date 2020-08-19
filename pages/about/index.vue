<template>
  <div class="container">
    <div class="text-left">
      <p style="color: black; font-size: 20px;">
        1. Khi người dùng vào một trang web, trình duyệt sẽ gửi GET request tới
        web server
      </p>
      <p style="color: black; font-size: 20px;">
        2. Web server sẽ render HTML, trả về cho browser để hiển thị cho người
        dùng
      </p>
      <p style="color: black; font-size: 20px;">
        3. Web server sẽ nhận request, đọc dữ liệu từ database.
      </p>
      <p style="color: black; font-size: 20px;">
        4. Web server gửi dữ liệu JSON về browser
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
