package com.example.adminservice.client;


import com.example.adminservice.model.Account;
import feign.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Arrays;
import java.util.List;

@FeignClient(name = "core-service", url = "${core-service.url}", configuration = CoreServiceClientFeignConfig.class)
public interface CoreServiceClient {

    @RequestMapping(method = RequestMethod.GET, value = "api/accounts/account", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    List getAccounts();

}
