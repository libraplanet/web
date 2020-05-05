function vecIII(){
	this.create = function(){
		return new Float32Array(3);
	};

	this.unitX = function(dest){
		dest[0] = 1;
		dest[1] = 0;
		dest[2] = 0;
		return dest;
	}

	this.unitY = function(dest){
		dest[0] = 0;
		dest[1] = 1;
		dest[2] = 0;
		return dest;
	}
	this.unitZ = function(dest){
		dest[0] = 0;
		dest[1] = 0;
		dest[2] = 1;
		return dest;
	}

	this.zero = function(dest){
		dest[0] = dest[1] = dest[2] = 0;
		return dest;
	}

	this.one = function(dest){
		dest[0] = dest[1] = dest[2] = 1;
		return dest;
	}

	this.length = function(vec){
		return Math.sqrt((vec[0] * vec[0]) + (vec[1] * vec[1]) + (vec[2] * vec[2]));
	}

	this.normalize = function(vec, dest){
		var scale = 1.0 / length(vec);
		dest[0] *= scale;
		dest[1] *= scale;
		dest[2] *= scale;
		return dest;
	}

	this.set3fv = function(vec, dest){
		dest[0] = vec[0] ;
		dest[1] = vec[1] ;
		dest[2] = vec[2] ;
		return dest;
	}

	this.add = function(vec1, vec2, dest){
		dest[0] = vec1[0] + vec2[0];
		dest[1] = vec1[1] + vec2[1];
		dest[2] = vec1[2] + vec2[2];
		return dest;
	}
	this.subtract = function(vec1, vec2, dest){
		dest[0] = vec1[0] - vec2[0];
		dest[1] = vec1[1] - vec2[1];
		dest[2] = vec1[2] - vec2[2];
		return dest;
	}
	this.multiply1f = function(vec, scale, dest){
		dest[0] = vec[0] * scale;
		dest[1] = vec[1] * scale;
		dest[2] = vec[2] * scale;
		return dest;
	}
	this.multiply3fv = function(vec, scale, dest){
		dest[0] = vec[0] * scale[0];
		dest[1] = vec[1] * scale[1];
		dest[2] = vec[2] * scale[2];
		return dest;
	}
	this.divide1f = function(vec, scale, dest){
		dest[0] = vec[0] / scale;
		dest[1] = vec[1] / scale;
		dest[2] = vec[2] / scale;
		return dest;
	}
	this.divide3fv = function(vec, scale, dest){
		dest[0] = vec[0] / scale[0];
		dest[1] = vec[1] / scale[1];
		dest[2] = vec[2] / scale[2];
		return dest;
	}
}
