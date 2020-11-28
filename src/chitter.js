class Chitter {
  constructor(element, client) {
    this.element = element
    this.client = client
    this.setup()
  }

  setup() {
    this.client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then(data => {
        console.log(data)
        this.peeps = data
        this.render()
      })
  }

  render() {
    this.element.innerHTML = this.peeps.map(peep => `<li>${peep.body} posted by ${peep.user.handle} </li>`)
  }

}