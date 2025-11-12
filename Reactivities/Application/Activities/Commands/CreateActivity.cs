namespace Application.Activities.Commands;
using Domain;
using MediatR;
using Persistence;

public class CreateActivity
{
    // Definiamo il comando per creare una nuova attività, il risultato sarà l'Id dell'attività
    public class Command : IRequest<string>
    {
        // L'attività da creare deve essere fornita e valorizzata
        public required Activity Activity { get; set; }
    }

    // Questo handler gestisce la logica per la creazione di una nuova attività
    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            // Aggiunge la nuova attività al contesto del database
            context.Activities.Add(request.Activity);
            // Salva le modifiche in modo asincrono nel database
            await context.SaveChangesAsync(cancellationToken);
            // Restituisce l'Id della nuova attività creata
            return request.Activity.Id;
        }
    }
}
