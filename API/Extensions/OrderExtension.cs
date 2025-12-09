using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Entity;

namespace API.Extensions
{
    public static class OrderExtension
    {
        public static IQueryable<OrderDTO> OrderToDTO(this IQueryable<Order> query)
        {
            return query.Select(i => new OrderDTO
            {
                Id = i.Id,
                CustomerId = i.CustomerId,
                FirstName = i.FirstName,
                LastName = i.LastName,
                Phone = i.Phone,
                City = i.City,
                AddressLine = i.AddressLine,
                DeliveryFee = i.DeliveryFee,
                SubTotal = i.SubTotal,
                OrderStatus = i.OrderStatus,
                OrderDate = i.OrderDate,
                OrderItems = i.OrderItems.Select(item => new OrderDTO.OrderItemDTO
                {
                    Id = item.Id,
                    ProductId = item.ProductId,
                    ProductName = item.ProductName,
                    ProductImage = item.ProductImage,
                    Quantity = item.Quantity,
                    Price = item.Price
                }).ToList()
            });
        }
    }
}