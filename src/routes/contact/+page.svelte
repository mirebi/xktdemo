<script>
	import Form from '$lib/components/form.svelte';
	import '@fontsource/montserrat';
</script>

<div class="main-box w-full">
	<div
		class="textinfo flex flex-col justify-between md:text-sm text-xs px-1 border-r border-r-black"
	>
		<p>
			If your browser does not support forms or you prefer not to use them, you can send e-mail
			directly to <a class="text-xkt-red-800" href="mailto:sales@xktengineering.com">
				sales@xktengineering.com</a
			>
			, call us at
			<a class=" text-xkt-red-800" href="tel: (707) 562-2500">(707) 562-2500</a> , or fax us at
			<a class=" text-xkt-red-800" href="tel: (707) 562-2565">(707) 562-2565</a>.
		</p>
		<p>
			We are physically located at Building 390, Railroad Avenue, Mare Island, CA 94592.<br />Our
			mailing address is: P.O. Box 152, Vallejo, CA 94590.
		</p>
		<p>Driving directions to our facility are available by using the map below.</p>
		<iframe
			class="w-full"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10048.11887612431!2d-122.27075161664892!3d38.092801148249045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808574828b0e564f%3A0xb4373bcbd0a0502d!2s390%20Railroad%20Ave%2C%20Vallejo%2C%20CA%2094592!5e0!3m2!1sen!2sus!4v1665808372229!5m2!1sen!2sus"
			height="450"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
	<div class="form px-20"><Form /></div>
</div>

<style>
	* {
		font-family: Montserrat, sans-serif;
	}
	.main-box {
		display: grid;
		grid-template-columns: 1fr 6fr 6fr 1fr;
		grid-template-rows: 1fr 8fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'. . . .'
			'. textinfo form .'
			'. . . .';
	}

	.textinfo {
		grid-area: textinfo;
	}

	.form {
		grid-area: form;
	}

	@media screen and (max-width: 767px) {
		.main-box {
			display: flex;
			flex-direction: column-reverse;
		}

		.textinfo {
			padding: 1rem;
		}

		.form {
			padding: 0;
		}

		iframe {
			margin-top: 2rem;
			height: 20rem;
		}
	}
</style>
