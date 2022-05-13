<script>
	import { connect } from "./web3Modal";

	function handleClick() {
	  connect();
	}
</script>

<style>
	button {
	  background: #ff3e00;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	}
</style>

<button on:click={handleClick}>
  Connect
</button>
