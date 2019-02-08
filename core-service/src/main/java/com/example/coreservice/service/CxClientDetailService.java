//package com.example.coreservice.service;
//
//import com.example.coreservice.repository.CxClientDetailRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.oauth2.provider.*;
//
//import java.util.List;
//import java.util.Optional;
//
//public class CxClientDetailService implements ClientDetailsService, ClientRegistrationService {
//
//    @Autowired
//    CxClientDetailRepository cxClientDetailRepository;
//
//    @Override
//    public ClientDetails loadClientByClientId(String s) throws ClientRegistrationException {
//        Optional<?> clientDetails = cxClientDetailRepository.findById(Long.valueOf(s));
//        return (ClientDetails) clientDetails.orElse(null);
//    }
//
//    @Override
//    public void addClientDetails(ClientDetails clientDetails) throws ClientAlreadyExistsException {
//
//    }
//
//    @Override
//    public void updateClientDetails(ClientDetails clientDetails) throws NoSuchClientException {
//
//    }
//
//    @Override
//    public void updateClientSecret(String s, String s1) throws NoSuchClientException {
//
//    }
//
//    @Override
//    public void removeClientDetails(String s) throws NoSuchClientException {
//
//    }
//
//    @Override
//    public List<ClientDetails> listClientDetails() {
//        return null;
//    }
//}
