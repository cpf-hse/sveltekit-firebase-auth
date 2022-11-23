<script lang="ts">
	import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
	import { firebaseApp } from '$lib/firebaseSetup';
	import { prevent_default } from 'svelte/internal';

	let email = '';
	let password = '';
    let user = { loggedIn: false };

    function loginGoogle() {
        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

	function login() {
		const auth = getAuth(firebaseApp);
		signInWithEmailAndPassword(auth, email, password)
			.then((response) => { 
                console.log(response);
                user.loggedIn = true
                console.log(`${response.user.email} logged in.`);
                sendTokenToServer(response._tokenResponse.idToken)
                window.alert(`Welcome ${response.user.email}!`);
            })
			.catch((error) => {
				console.log(error);
			});
	}

    async function sendTokenToServer() {
        const auth = getAuth(firebaseApp);
        if (auth.currentUser) {
            // Retrieve JWT to identify the user to the Identity Platform service.
            // Returns the current token if it has not expired. Otherwise, this will
            // refresh the token and return a new one.
            console.log("FETCHING...")
            const token = await auth.currentUser.getIdToken();
            console.log(`Token: ${token}`)
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`,
                }
            })
                .then((response) => {
                    if (response.ok) {
                        window.alert("OK");
                    }
                })
                .catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error);
                    window.alert('Something went wrong... Please try again!');
                });
        }
    }
</script>

<svelte:head>
	<title>Firebase Login</title>
	<meta name="description" content="Firebase Login" />
</svelte:head>

{#if !user.loggedIn}
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
    <button on:click={loginGoogle}>
	    Login with google
    </button>
</div>
{/if}

{#if user.loggedIn}
    <button on:click={sendTokenToServer}>
	    Login on sever
    </button>
{/if} 

<style>
	form {
		display: flex;
		flex-direction: column;
	}
</style>
