<template>
  <div class="wrapper">
    <div class="edit-avatar">
      <div class="avator">
        <input
          type="file"
          name=""
          id=""
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="changeImage($event)"
        >
        <img
          :src="avatorUrl"
          alt=""
        >
      </div>
    </div>
    <div class="edit-info">
      <h1>Basic Infomation</h1>
      <div class="form-group">
        <input
          type="text"
          placeholder="Full Name"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Email"
        >
      </div>
    </div>
    <div class="edit-info private">
      <h1>Private Infomation</h1>
      <div class="form-group">
        <input
          type="text"
          placeholder="Password"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Mobile"
        >
      </div>
      <button>Sign-Up</button>
    </div>
    <router-link class="link-to-another" tag="div" :to="{path:'login'}">
      Already have an account ?
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../styles/base";
.wrapper {
  .edit-avatar {
    height: 32vh;
    background: #5da3ff;
    position: relative;
    .avator {
      width: 60px;
      height: 60px;
      overflow: hidden;
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      border: 1px dashed #fff;
      border-radius: 50%;
      left: 30px;
      bottom: 30px;
      img {
        width: 100%;
        height: 100%;
      }
      [type="file"] {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
  .edit-info {
    margin: 0 30px 30px;
  &.private{
          margin: 0 30px 10px;
  }
    h1 {
      color: #5da3ff;
      font-size: 14px;
      font-weight: normal;
    }
    .form-group {
      margin: 10px 0;
      height: 32px;
      line-height: 32px;
      color: #2c3e50;

      & > input {
        border: 0;
        background-color: white;
        height: 30px;
        outline: none;
        font-size: 14px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 140, 255, 0.4);
        color: #99a4bf;
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background: #118fff;
      border: 0;
      outline: none;
      font-size: 18px;
      color: white;
      display: block;
      margin: 30px 0 0;
    }
  }
  .link-to-another {
    color: #5da3ff;
    font-size: 14px;
    text-align: center;
  }
}
</style>
