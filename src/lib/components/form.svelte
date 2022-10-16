<script>
	import '@fontsource/montserrat';
	import '@fontsource/merriweather';
</script>

<form action="" class="fluid">
	<div class="name form-item">
		<label for="name">Name:</label>
		<input class="bg-gray-200" type="text" id="name" name="name" value="" />
	</div>
	<div class="email form-item">
		<label for="email">Email:</label>
		<input class="bg-gray-200" type="text" id="email" name="email" value="" />
	</div>
	<div class="phone form-item">
		<label for="phone">Phone Number:</label>
		<input class="bg-gray-200" type="text" id="number" name="number" value="" />
	</div>
	<div class="subject form-item">
		<label for="subject">Subject:</label>
		<input class="bg-gray-200" type="subject" id="subject" name="subject" value="" />
	</div>
	<div class="message form-item">
		<label for="message">Message:</label>
		<textarea class="bg-gray-200" name="message" id="message" cols="30" rows="10" value="" />
	</div>
	<div class="form-item">
		<button class="bg-xkt-red-800 p-2 px-3 rounded-xl text-white" type="submit">Submit</button>
	</div>
</form>

<style lang="postcss">
	* {
		box-sizing: border-box;
		font-family: Montserrat, sans-serif;
	}
	.form-item {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	button {
		align-self: flex-start;
		font-family: Merriweather, serif;
	}
</style>
