using System.ComponentModel.DataAnnotations;

namespace API.Entity;

public class UserDTO
{
    [Required]
    public string Name { get; set; } = null!;
    [Required]
    public string Token { get; set; } = null!;
}