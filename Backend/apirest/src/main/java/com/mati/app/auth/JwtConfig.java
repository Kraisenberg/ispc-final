package com.mati.app.auth;

public class JwtConfig {

		public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";

		public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n"
				+ "MIIEowIBAAKCAQEAmrLxXM2NgKZ3pVuJVfpibNI6d1+2YMqVr9a2bVVf+MODTbqP\r\n"
				+ "oMnLfYQOSSgCncq9B3pM/YacsiMHRVG13zInb55yQQ0JxqNpFFra8dTMUcdzKL+4\r\n"
				+ "U4p4K076u3+9lbvi9lWrpgAMQB9e7RiB4IY7Jmsbn0CL9SknExgUtZISODhnho+l\r\n"
				+ "TTd4jCra7U4DhEyw3h33R3ZL5JvWZHcxpJvNDPGNh6UEoh6YCiwEbgXiHzwiLbSN\r\n"
				+ "kPaFgMZTHWnXX8YJa4tAayhzq3UhE0x9rRUOvjcdjlIK/5NWPY1FjqHQ71lTbgww\r\n"
				+ "SWbRNI3hAd6DPuL8eMLJy25uDaAHdXFLJ50iPwIDAQABAoIBAGBIu7z9GvNVqOY8\r\n"
				+ "gNAIlTYR6t3dro+zx1K4GrcWCjO0zIaWdUqoDoVCqfmSc35ubxS2ZDDvlZux/ZaB\r\n"
				+ "cudGOhFY1tfyG4GMt5w5qEgYIEtODjjwivNEHeMmtxv4N7F4TZzwWXNqWDWY0OZU\r\n"
				+ "+JEcOriAtaJ69CFUycMym8Ee90QRr2dxWRJGVupfVkEBPkuX9A4gNGj5rUn3h8E/\r\n"
				+ "xO4zSwtlldWvF5ipLHkF9aF2h8zA3Zv0PDAXCH9GEKOgSCCrm31IuwvCglMw49bw\r\n"
				+ "pSLk1XchlNA99WSw8uqx68dA81M7Xy4UspXseAiFmqrtMZ9qExYQ3N2RxYp2LA7v\r\n"
				+ "hpx/elECgYEAyxHu8lXDBvSCZ9a9LSyANKteezNWT4Dy//MPRT/Q088n4kAGzAr5\r\n"
				+ "9oIkAnLIceUsx3fCJv1D2QqrbGUQCykCfBKYFdc5CGQrw+v+3ZMoXy1XkdKIsFMS\r\n"
				+ "QwuxUex4g68zoCGWpef1IpoRdpI06Ashqs3JbP5tp5UoNQkX6pkCXRsCgYEAwwVm\r\n"
				+ "HX+mF6O+fLNutme5z1FV9+kCCPGRgUwXcDDgQQ9kKkLnuwu/SnGV3g+ZNh12Teo9\r\n"
				+ "aT+dyIah9lyqG4mFgZFoZpyJRQJOIJDM8NoPRvHE0qD+2oAUhuPBOa3n0FfxER3Q\r\n"
				+ "+neKrGz8py9b58Qhml5k4L7nLLGBr0U6EzkzFa0CgYAnklgQ6zt1CIK8/3Cf8/ML\r\n"
				+ "0HU55tgj6AnybIgGQ5hLHiw0f6uTaXQqYFPqEjoTT8h5GlJATMxC6DxdhBgrRJOS\r\n"
				+ "YAE5CFa51uNca4mf3gRY/7n31aIDUjzVydqFD2KwrpyN0N3NeLUhSAqtI3Kh4UFv\r\n"
				+ "Smi9D5uIs51BMINzmNuIDwKBgQCt0OMJiZrUWPnPFPGpG1vNfnW7xm4s4HlKHzKI\r\n"
				+ "qNdGxVwGGqmE2Vx+Eix7xbVNOQcXPJ3Nb4jGj9BMzpxCfNiD+cBuLDhgTESr28L9\r\n"
				+ "K60QEy3UeO+MeTlSXC38pZYF6EuQcN2wTtlHAsBQlfI46GL2vgj1EtDh0bd/Kpkv\r\n"
				+ "RvzT5QKBgChjRmI9sMuey8VvqEWp8O7g7Go4U5tLQ1uMIpkTEhdZYXUXDF53P8jU\r\n"
				+ "ssEk2JeArQJvDY4FqMcxmB0rr847ogJrta1a5JjkuR+8LWW1AcjKhaamxX1vbjpk\r\n"
				+ "4iM31qajK3jdYQwkCI2ZCBfgscTr5r7JmoZbNqKvyZSG9rJ+PHUu\r\n"
				+ "-----END RSA PRIVATE KEY-----";

		public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n"
				+ "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmrLxXM2NgKZ3pVuJVfpi\r\n"
				+ "bNI6d1+2YMqVr9a2bVVf+MODTbqPoMnLfYQOSSgCncq9B3pM/YacsiMHRVG13zIn\r\n"
				+ "b55yQQ0JxqNpFFra8dTMUcdzKL+4U4p4K076u3+9lbvi9lWrpgAMQB9e7RiB4IY7\r\n"
				+ "Jmsbn0CL9SknExgUtZISODhnho+lTTd4jCra7U4DhEyw3h33R3ZL5JvWZHcxpJvN\r\n"
				+ "DPGNh6UEoh6YCiwEbgXiHzwiLbSNkPaFgMZTHWnXX8YJa4tAayhzq3UhE0x9rRUO\r\n"
				+ "vjcdjlIK/5NWPY1FjqHQ71lTbgwwSWbRNI3hAd6DPuL8eMLJy25uDaAHdXFLJ50i\r\n"
				+ "PwIDAQAB\r\n"
				+ "-----END PUBLIC KEY-----";
		
}