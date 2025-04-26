namespace PhamQuocTai.Auth
{
    public class JwtSettings
    {
        public string SecretKey { get; set; } = "THIS_IS_A_SUPER_SECRET_KEY_1234567890_32";
        public string Issuer { get; set; } = "PhamQuocTaiApp";
        public string Audience { get; set; } = "PhamQuocTaiUsers";
        public int ExpirationMinutes { get; set; } = 60;
    }
}
