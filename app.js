const app = Vue.createApp({
	data() {
		return {
			firstName: 'Joe',
			lastName: 'Schmo',
			email: 'joe.schmo@gmail.com',
			gender: 'male',
			picture: 'https://randomuser.me/api/portraits/men/10.jpg',
		}
	},
	methods: {
		async getUser() {
			const res = await fetch('https://randomuser.me/api');
			const { results } = await res.json();
			const data = results[0];

			this.firstName = data.name.first;
			this.lastName = data.name.last;
			this.email = data.email;
			this.gender = data.gender;
			this.picture = data.picture.large;
		},
	}
});

app.mount('#app');