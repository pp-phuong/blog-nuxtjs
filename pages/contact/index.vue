<template>
  <b-container class="d-flex flex-column">
    <div class="d-flex flex-column text-left">
      <h1 class="p-5 bg-dark text-light font-weight-bold">
        Get In Touch
      </h1>
      <p class="p-5">
        We love to hear from you, but we might not reply as quick as you expect
        due to high volume of emails. Please give us at least 18 hours before
        re-sending your email. Lastly, if you have any question, please be as
        detailed as you can, so we can reply to you with the most useful answer
        to your question.
      </p>
    </div>
    <b-card bg-variant="light" class="w-100 text-left pl-10 mb-10">
      <b-form-group
        id="fieldset-horizontal"
        label-class="font-weight-bold pt-0"
        label-size="lg"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-class="font-weight-bold pt-0"
        label-size="lg"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Email"
        label-for="input-horizontal"
      >
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-input>

          <label class="sr-only" for="inline-form-input-username"
            >Username</label
          >
          <b-input-group prepend="@" class="mb-2 ml-2 mr-sm-2 mb-sm-0">
            <b-input
              id="inline-form-input-username"
              placeholder="Username"
            ></b-input>
          </b-input-group>

          <b-input-group class="mb-2 ml-2 mr-sm-2 mb-sm-0">
            <b-input
              id="inline-form-input-username"
              type="number"
              placeholder="Your age"
            ></b-input>
          </b-input-group>
        </b-form>
      </b-form-group>
      <b-form-group
        label-cols-lg="3"
        label="Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="1"
          label="Street:"
          label-align-sm="right"
          label-for="nested-street"
        >
          <b-form-input id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="1"
          label="City:"
          label-align-sm="right"
          label-for="nested-city"
        >
          <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="1"
          label="State:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-class="font-weight-bold pt-0"
        label-size="lg"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Your message"
        label-for="input-horizontal"
      >
        <b-form-textarea
          id="input-horizontal"
          placeholder="Your message"
          rows="8"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" class="float-right">Submit message </b-button>
    </b-card>
  </b-container>
</template>
<style scoped>
* {
  font-family: 'Open Sans', sans-serif;
}
p {
  padding-top: 5px;
  font-size: 15px;
  color: #666666;
}
</style>
