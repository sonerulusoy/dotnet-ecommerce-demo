using Microsoft.AspNetCore.Identity;

namespace api.Entity;

public class AppUser : IdentityUser
{
    public string? Name { get; set; }
}