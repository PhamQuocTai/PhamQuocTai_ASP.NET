namespace PhamQuocTai_2122110011.Auth
{
    public class JwtSettings
    {
        public string SecretKey { get; set; } = "THIS_IS_A_SUPER_SECRET_KEY_1234567890_32";
        public string Issuer { get; set; } = "PhamQuocTai_2122110011App";
        public string Audience { get; set; } = "PhamQuocTai_2122110011Users";
        public int ExpirationMinutes { get; set; } = 60;
    }
}
