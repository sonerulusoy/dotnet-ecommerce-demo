using api.Entity;
using Microsoft.AspNetCore.Identity;

namespace API.Entity;

public static class SeedDatabase
{
    public static async void Initiliaze(IApplicationBuilder app)
    {
        var userManager = app.ApplicationServices
                                .CreateScope()
                                .ServiceProvider
                                .GetRequiredService<UserManager<AppUser>>();

        var roleManager = app.ApplicationServices
                                .CreateScope()
                                .ServiceProvider
                                .GetRequiredService<RoleManager<AppRole>>();

        if (!roleManager.Roles.Any())
        {
            var customer = new AppRole { Name = "Customer" };
            var admin = new AppRole { Name = "Admin" };

            await roleManager.CreateAsync(customer);
            await roleManager.CreateAsync(admin);
        }

        if (!userManager.Users.Any())
        {
            var customer = new AppUser { Name = "Rıdvan Yılmaz", UserName = "ridvanyilmaz", Email = "ridvanyilmaz@gmail.com" };
            var admin = new AppUser { Name = "Soner Ulusoy", UserName = "ulusoysoner", Email = "ulusoysoner1@gmail.com" };

            await userManager.CreateAsync(customer, "Customer123!");
            await userManager.AddToRoleAsync(customer, "Customer");

            await userManager.CreateAsync(admin, "Admin123!");
            await userManager.AddToRolesAsync(admin, ["Admin", "Customer"]);
            
        }
    }
}
