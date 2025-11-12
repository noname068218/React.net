using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using MediatR;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
      private IMediator? _mediator;

      protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>()
      ?? throw new InvalidOperationException("IMediator service is unavailable");
    }
}