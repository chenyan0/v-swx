
<template>

    <div class="loader"></div>
    <!-- <div class="loader1"></div> -->
</template>
<style lang="scss" scoped>
#wrapper{
    position: relative;
}
.loader1{
	position: relative;
	height: 80px;
	width: 80px;
	border-radius: 80px;
	border: 3px solid  rgba(0, 4, 66, 0.7);

	top: 28%;
	top: -webkit-calc(50% - 43px);
	top: calc(50% - 43px);
	left: 35%;
	left: -webkit-calc(50% - 43px);
	left: calc(50% - 43px);

	-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
	-webkit-animation: loader1 2s linear infinite;
			animation: loader1 2s linear infinite;
}

.loader1:after{
	content: "";
	position: absolute;
	top: -5px;
	left: 20px;
	width: 11px;
	height: 11px;
	border-radius: 10px;
	background-color:rgba(0, 4, 66, 1);
}

@-webkit-keyframes loader1{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@keyframes loader1{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}


$colors:
  hsla(337, 84, 48, 0.75)
  hsla(160, 50, 48, 0.75)
  hsla(190, 61, 65, 0.75)
  hsla( 41, 82, 52, 0.75);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;

.loader {
  position: relative;
  width: $size;
  height: $size;
  transform: rotate(165deg);
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: $thickness;
    height: $thickness;
    border-radius: $thickness / 2;
    transform: translate(-50%, -50%);
  }
  
  &:before {
    animation: before 2s infinite;
  }
  
  &:after {
    animation: after 2s infinite;
  }
}

@keyframes before {
  0% {
    width: $thickness;
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: $size;
    box-shadow:
      0 (-$offset) nth($colors, 1),
      0   $offset  nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow:
      (-$lat) (-$offset) nth($colors, 1),
      $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow:
        $offset  0 nth($colors, 2),
      (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow:
      $offset (-$lat) nth($colors, 2),
      (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
}



/**
 * Attempt to center the whole thing!
 */


.loader {
  position: absolute;
  top: calc(50% - #{$size / 2});
  left: calc(50% - #{$size / 2});
}

</style>

