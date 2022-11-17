<script lang="ts">
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { firebaseApp } from '$lib/firebaseSetup';
	import { prevent_default } from 'svelte/internal';

	let email = '';
	let password = '';

	function login() {
		const auth = getAuth(firebaseApp);
		signInWithEmailAndPassword(auth, email, password)
			.then((response) => console.log(response))
			.catch((error) => {
				console.log(error);
			});
	}
</script>

<svelte:head>
	<title>Firebase Login</title>
	<meta name="description" content="Firebase Login" />
</svelte:head>

<div class="text-column">
	<form on:submit|preventDefault={login}>
		<div>
			<input type="text" placeholder="Enter your e-mail" bind:value={email} />
		</div>
		<div>
			<input type="password" placeholder="Password" bind:value={password} />
		</div>
		<div>
			<input type="submit" />
		</div>
	</form>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
</style>
