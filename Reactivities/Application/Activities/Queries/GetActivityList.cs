namespace Application.Activities.Queries;
using Domain; 
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>>
    {
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}