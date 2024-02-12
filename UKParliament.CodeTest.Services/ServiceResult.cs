using System.Net;
using System.Net.NetworkInformation;

namespace UKParliament.CodeTest.Services;

public class ServiceResult
{
    public bool IsSuccess {get; set;}
    public object? Data {get; set;}
    public string? ErrorMessage {get; set;}
    public HttpStatusCode StatusCode {get; set;}
}