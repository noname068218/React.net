namespace Application.Core;

using AutoMapper;
using Domain;

/// <summary>
/// AutoMapper configuration profile for mapping between domain entities and DTOs.
/// This class defines how properties should be mapped from source to destination objects.
/// </summary>
public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        // Map from Activity entity to Activity entity
        // This is used in EditActivity command to update existing entity with new values
        // AutoMapper will automatically map properties with matching names
        CreateMap<Activity, Activity>();
        
        // Future mappings can be added here as the application grows
        // Example: CreateMap<Activity, ActivityDto>();
        // Example: CreateMap<CreateActivityDto, Activity>();
    }
}

