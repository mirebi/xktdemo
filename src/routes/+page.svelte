<script>
	import Hero from '$lib/components/hero.svelte';
	import '@fontsource/catamaran';
	import '@fontsource/montserrat';
</script>

<div class="sticky">
	<Hero />
</div>

<div class="quality mt-32 lg:grid grid-cols-[1fr,2fr,1fr,4fr,1fr] gap-5 p-10">
	<div class="graphics col-start-2 col-span-1 lg:flex items-center hidden lg:block">
		<img src="/quality.webp" alt="Quality Control Engineer" class="w-[800px]" />
	</div>
	<div class="content col-start-4 col-span-1 flex flex-col gap-8">
		<p class="text-2xl header">Quality!</p>
		<p>
			Every item XKT Engineering produces has diverse quality control requirements. Our Quality
			Control/Quality Assurance personnel are committed to seeing that all of our products and
			services meet or exceed our customers' quality requirements.
		</p>
		<p>
			XKT Engineering has the experience, personnel, equipment and proven record in assuring quality
			welded fabrication and machinery. Our personnel bring with them experience in heavy structural
			steel, pressure vessels, power piping, vacuum chambers, hydraulic power units, bridge
			fabrication, piling, barge manufacturing, test fixtures and crane fabrication.
		</p>
		<p>
			We are fully knowledgeable with AWS; AASTO; API 2B; API RP2A; AISC and other standard
			commercial specifications. Through numerous government and defense related projects, our
			personnel have become thoroughly familiar with many MIL-specs.
		</p>
		<p>Currently held certifications:</p>
		<ul class="list-decimal px-4">
			<li>ASME Section VIII, Division 1</li>
			<li>AISC Cbd, Cbr, with F & P endorsements</li>
			<li>MIL-Q-9858A</li>
			<li>MIL-I-45208A</li>
		</ul>
	</div>
</div>

<div class="text-xl text-center py-20" id="services">Services</div>

<div class="quality lg:grid grid-cols-[1fr,4fr,1fr,2fr,1fr] gap-5 p-10 lg:visible">
	<div class="content col-start-2 col-span-1 flex flex-col gap-8">
		<p class="header text-xl">Fabricating</p>
		<p>
			XKT Engineering is accustomed to precise and close tolerance work. We have designed,
			fabricated and installed numerous structures for marine, military and general industry needs.
			As a result of this experience in both commercial and defense contracts, we are accustomed to
			manufacturing a variety of fabrications which require extensive documentation. Our performance
			on such contracts qualifies us to produce structures of the highest quality with complete
			traceability.
		</p>
	</div>
	<div class="graphics col-start-4 col-span-1 lg:flex items-center hidden lg:block">
		<img src="/robot-arm.webp" alt="Quality Control Engineer" class="w-[800px]" />
	</div>
</div>
<div class="quality lg:grid grid-cols-[1fr,2fr,1fr,4fr,1fr] gap-5 p-10 lg:visible">
	<div class="graphics col-start-2 col-span-1 lg:flex items-center hidden lg:block">
		<img src="/welding.webp" alt="Quality Control Engineer" class="w-[800px]" />
	</div>
	<div class="content col-start-4 col-span-1 flex flex-col gap-8">
		<p class="header text-xl">Welding</p>
		<p>
			Our welding experience is substantial. We do ferrous, non-ferrous and bimetal welding. Our
			processes include GMAW, FCAW, SMAW and SAW. Our strength lies in welding know-how from joint
			design through metal disposition. Our craftsmen routinely weld large and small steel
			components to precise tolerances. We also weld stainless steel and dissimilar metals while
			meeting every N.D.T. requirement. Our shop is staffed by highly qualified personnel operation
			the most modern welding equipment available. We routinely meet the requirements of AWS and
			ASME welding codes.
		</p>
	</div>
</div>
<div class="quality lg:grid grid-cols-[1fr,4fr,1fr,2fr,1fr] gap-5 p-10 lg:visible">
	<div class="content col-start-2 col-span-1 flex flex-col gap-8">
		<p class="header text-xl">Engineering</p>
		<p>
			Our engineers have many years of practical experience in the application of structural and
			mechanical engineering design and installation, extensive experience in custom design of
			hydraulic circuitry, heavy machinery and systems, and support equipment for industrial, marine
			and defense applications. At XKT we can build to a client's drawings, provide analysis of a
			customer's design or handle complete design and fabrication functions to strict
			specifications.
		</p>
	</div>
	<div class="graphics col-start-4 col-span-1 lg:flex items-center hidden lg:block">
		<img src="/engineering.webp" alt="Quality Control Engineer" class="w-[800px]" />
	</div>
</div>

<style>
	p,
	li {
		font-family: Montserrat, sans-serif;
	}

	.header {
		font-family: Catamaran, sans-serif;
	}
</style>
