<script setup lang="ts">
import { defineProps } from "vue";

const emit = defineEmits(["toggle"]);

defineProps({
	text: {
		type: String,
		default: "Search",
	},
	target: {
		type: String,
		default: "search-modal",
	},
});
</script>

<template>
	<!-- Modal toggle -->
	<button
		class="text-green-500 lg:text-light-slate flex justify-center items-center rounded hover:border-green-500 hover:bg-green-900 lg:hover:border lg:hover:border-green-500/50 md:rounded-full mx-1 px-2"
		type="button"
		:aria-label="text"
		@click="emit('toggle', target)"
	>
		<span class="flex justify-center items-center text-sm">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37"
				/>
			</svg>
			<span class="hidden lg:flex text-xs">
				{{ text }}
				<kbd
					class="ml-1 text-xs font-semibold text-light-slate bg-lightest-navy border border-light-navy rounded"
					>⌘</kbd
				>
				<kbd
					class="text-xs font-semibold text-light-slate bg-lightest-navy border border-light-navy rounded"
					>K</kbd
				>
			</span>
		</span>
	</button>
</template>

<style scoped></style>
